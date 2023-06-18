import axios from "axios";
export class contactService{

static serverURl = 'http://548y122.e2.mars-hosting.com/api/';

static getAllContacts(){
    return axios.get(this.serverURl + 'contacts/all')
}

// static getContactById(idcontactId){
//     return axios.get(this.serverURl + `contacts/${contactId}`)
// }

// static createContact(contact){
//     return axios.post('contacts/add')
// }

// static editContact(contact, contactId){
//     return axios.put("edit/:contactId")
// }

// static deleteContact(contactId){
//     return axios.get(this.serverURl + `delete/${contactId}`)
// }

// static getAllGroups(){
//     return axios.get(this.serverURl + 'groups')
// }

// static getGroupById(contact){
//     return axios.get(this.serverURl + `groups/${contact.groupId}`)
// }

}