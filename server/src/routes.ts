import express from 'express';
import db from './db/connection';

const routes = express.Router();

import convertHourToMinute from './utils/convertToMinutes';

interface scheduleItem {
    week_day:number;
    from:string;
    to:string;
}

routes.post('/classes', async (req, res)=>{
    const trx = await db.transaction();
        const {
            name,
            avatar,
            whatsapp,
            subject,
            cost,
            schedule,
            bio
        } = req.body;
    try{
        
        
        const insertedUsers = await trx('users').insert({
            name:name,
            avatar:avatar,
            whatsapp:whatsapp,
            bio:bio
        });

        const user_id = insertedUsers[0];

        const insertedClasses = await trx('classes').insert({
            subject:subject,
            cost:cost,
            user_id:user_id,
        });

        const class_id = insertedClasses[0];


        const classSchedule = schedule.map((item:scheduleItem) =>{
            //week day obs -> 1 = domingo; 7 = sabado;
            return {
                class_id:class_id,
                week_day: item.week_day,
                from: convertHourToMinute(item.from),
                to: convertHourToMinute(item.to),
            }
        })

        await trx('class_schedule').insert(classSchedule);


        await trx.commit();//transaction - caso não faça alguma operação proposta da rota, cancela a inserção

        return res.json(await db('class_schedule').select('*'));

    }catch(e){
        trx.rollback();//desfaz qualquer alteração no banco, caso haja erro
        res.status(400);
        return res.json({Error:e})
    }
});

export default routes;

