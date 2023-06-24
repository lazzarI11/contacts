import axios from "axios";
export class contactService{

static serverURl = 'http://548y122.e2.mars-hosting.com/api/';

static getAllContacts(){
    return axios.get(this.serverURl + 'contacts/all')
}

static getContactById(contactId){
    return axios.get(this.serverURl + `contacts/view/${contactId}`)
}

static createContact(contact){
    return axios.post(this.serverURl + 'contacts/add',this.makePayload(contact));
}

static editContact(contact, contactId){
    return axios.post(this.serverURl + `contacts/edit/${contactId}`,this.makePayload(contact));
}

// static deleteContact(contactId){
//     return axios.get(this.serverURl + `delete/${contactId}`)
// }

static getAllGroups(){
    return axios.get(this.serverURl + 'groups')
}

// static getGroupById(contact){
//     return axios.get(this.serverURl + `groups/${contact.groupId}`)
// }

static makePayload(contact){
    const formData = new FormData();
    formData.append("name", contact.name)
    formData.append("company", contact.company)
    formData.append("email", contact.email)
    formData.append("title", contact.title)
    formData.append("mobile", contact.mobile)
    formData.append("photo", contact.photo)
    formData.append("groupId", contact.groupId)
 
    return formData;
}

}