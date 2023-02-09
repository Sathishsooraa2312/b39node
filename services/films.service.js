import { client } from "../index.js";

export async function updatefilmById(id, data) {
    return client
        .db("b39")
        .collection("films")
        .updateOne({ id: id }, { $set: data });
}
export async function deletefilmsById(id) {
    return client
        .db("b39")
        .collection("films")
        .deleteOne({ id: id });
}
export async function insertfilms(data) {
    return client.db("b39").collection("films").insertOne(data);
}
export async function getfilmById(id) {
    return await client
        .db("b39")
        .collection("films")
        .findOne({ id: id });
}
export async function getAllfilms(request) {
    return await client
        .db("b39")
        .collection("films")
        .find(request.query)
        .toArray();
}
