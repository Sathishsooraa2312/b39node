import express from "express";

import { getAllfilms,
   getfilmById,
    insertfilms, 
    deletefilmsById, updatefilmById } from "../services/films.service.js";
const router=express.Router();

router.get("/", async function (request, response) {
    // db.films.find({})
    // find gives cursor -> toArray
    if(request.query.rating){
      request.query.rating=+request.query.rating
    }
    const film = await getAllfilms(request);
  response.send(film);
  console.log(request.query) ;
});
router.get("/:id", async function (request, response) {
  const{id}=request.params;
  console.log(id);
  //  db.films.findOne({id:"101"})
  // const film=films.find((mv)=>mv.id===id);
      const film = await getfilmById(id);
  film 
  ?response.send(film) 
  : response.status(404).send({movie:"movie not found"});
});

router.post("/",async function (request, response) {
  const data=request.body;
  console.log(data);
  // db.films.insertMany({id:1})
  const result =
   await insertfilms(data);
  response.send(result);
});
router.delete("/:id", async function (request, response) {
  const{id}=request.params;
  console.log(id);
  //  db.films.deleteOne({id:"101"})
  
      const result = await deletefilmsById(id);
  result.deletedCount>0
  ?response.send({msg : "movie was successfully deleted"}) 
  : response.status(404).send({movie:"movie not found"});
});
router.put("/:id", async function (request, response) {
  const{id}=request.params;
  const data=request.body;
  console.log(data);
  console.log(id);
  //  db.films.updateOne({id:"101"},{$set:data })
  
      const result = await updatefilmById(id, data);
  result
  ?response.send(result) 
  : response.status(404).send({movie:"movie not found"});
  console.log(result);
});

export default router;


