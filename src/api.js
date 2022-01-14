import axios from "axios";
const url = "http://localhost:5005/api/cards/";

export default class API {
    //to get all the cards from server
    static async getAllCard() {
        const res = await axios.get(url);
        return res.data;
    }
    //to get single card by id
    static async getCardById(id) {
        const res = await axios.get(`${url}/${id}`);
        return res.data;
    }
    //to insert card into database
    static async addCard(card) {
        const res = await axios.post(url, card);
        return res.data;
    }
    //to update card into database
    static async updateCard(id, card) {
        const res = await axios.patch(`${url}/${id}`, card);
        return res.data;
    }
    //to delete card by id
    static async deleteCard(id) {
        const res = await axios.delete(`${url}/${id}`);
        return res.data;
    }
}
