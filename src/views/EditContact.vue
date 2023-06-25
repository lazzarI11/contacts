<template>
    <div class="container mt-3">
        <div class="row">
            <div class="col">
                <p class="h3 text-success fw-bold">Edit Contact</p>
                <p class="fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quibusdam eum ullam provident assumenda distinctio facere mollitia expedita, officiis esse corrupti ad magni doloremque! Consequuntur, tempore hic. Explicabo, fugit commodi.</p>
            </div>
        </div>
    </div>
    <div class="container mt-3">
        <div class="row">
            <div class="col-md-4">
                <form @submit.prevent="update()">
                    <div class="mb-2">
                        <input v-model="updatedContact.name" type="text" class="form-control" :placeholder = contact.contact_name>
                    </div>
                    <div class="mb-2">
                        <input v-model="updatedContact.photo" type="text" class="form-control" :placeholder = contact.contact_photo>
                    </div>
                    <div class="mb-2">
                        <input v-model="updatedContact.email" type="email" class="form-control" :placeholder=contact.contact_email>
                    </div>
                    <div class="mb-2">
                        <input v-model="updatedContact.mobile" type="tel" class="form-control" :placeholder= contact.contact_mobile maxlength="10">
                    </div>
                    <div class="mb-2">
                        <input v-model="updatedContact.company" type="text" class="form-control" :placeholder="contact.contact_company">
                    </div>
                    <div class="mb-2">
                        <input v-model="updatedContact.title" type="text" class="form-control" :placeholder="contact.contact_title">
                    </div>
                    <div class="mb-2">
                        <select v-model="updatedContact.groupId" class="form-control">
                            <option value = null>Select Group</option>
                            <option :value="group.id" v-for="group of groups" :key="group">{{ group.name }}</option>
                        </select>
                    </div>
                    <div class="mb-2">
                        <input type="submit" class="btn btn-success" value="Update">
                    </div>
                </form>
            </div>
            <div class="col-md-4">
                <img :src="getPhoto()" alt="" class="contact-img">
            </div>
        </div>
    </div>
</template>

<script>
import {contactService} from "@/services/contactService"
    export default{
        name: "EditContact",
        data : function (){
            return{
                contact:{},
                updatedContact:{
                    name:'',
                    photo:'',
                    email:'',
                    mobile:'',
                    company:'',
                    title:'',
                    groupId: null
                },
                photoURL:'',
                groups:{},
                contactId:null,
                errorMessage:null,
                loading:false
            }
        },
        created: async function (){
            try{
                this.loading = true;
                this.contactId = this.$route.params.contactId;
                this.fetchData();
                this.loading = false;
            }
            catch(error){
                this.errorMessage = error
                this.loading = false;
            }
        },
        methods:{
            fetchData: async function(){
                let response = await contactService.getContactById(this.contactId);
                let responseGroups  = await contactService.getAllGroups();
                this.groups = responseGroups.data.data;
                this.contact = response.data.data;
            },
            update: function () {
                try {
                    console.log(this.contactId)
                    const response = contactService.editContact(this.updatedContact,this.contactId);
                    if (response) {
                        const contactId = this.$route.params.contactId;
                        this.$router.replace({name:"ViewContact",params:contactId})
                    }
                        else {
                    this.$router.push("/");
                    }
                    }
                 catch (error) {
                    console.log(error);
                }
            },
            getPhoto: function(){
                if(this.updatedContact.photo == ''){
                    return this.contact.photo
                }
                else if(this.contact.photo != this.updatedContact.photo){
                    return this.updatedContact.photo
                }
                else{
                    return this.contact.photo
                }
            }
        }
    }
</script>

<style scoped>
</style>