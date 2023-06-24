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
                        <input v-model="upddatedContact.name" type="text" class="form-control" :placeholder = contact.name>
                    </div>
                    <div class="mb-2">
                        <input v-model="upddatedContact.photo" type="text" class="form-control" :placeholder = contact.photo>
                    </div>
                    <div class="mb-2">
                        <input v-model="upddatedContact.email" type="email" class="form-control" :placeholder=contact.email>
                    </div>
                    <div class="mb-2">
                        <input v-model="upddatedContact.mobile" type="number" class="form-control" :placeholder= contact.mobile>
                    </div>
                    <div class="mb-2">
                        <input v-model="upddatedContact.company" type="text" class="form-control" :placeholder="contact.company">
                    </div>
                    <div class="mb-2">
                        <input v-model="upddatedContact.title" type="text" class="form-control" :placeholder="contact.title">
                    </div>
                    <div class="mb-2">
                        <select v-model="upddatedContact.groupId" class="form-control">
                            <option value="">Select Group</option>
                            <option :value="group.id" v-for="group of groups" :key="group">{{ group.name }}</option>
                        </select>
                    </div>
                    <div class="mb-2">
                        <input type="submit" class="btn btn-success" value="Update">
                    </div>
                </form>
            </div>
            <div class="col-md-4">
                <img :src="contact.photo" alt="" class="contact-img">
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
                upddatedContact:{
                    name:'',
                    photo:'',
                    email:'',
                    mobile:'',
                    company:'',
                    title:'',
                    groupId: null
                },
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
                let response = await contactService.getContactById(this.contactId);
                let responseGroups  = await contactService.getAllGroups();
                this.groups = responseGroups.data.data;
                this.contact = response.data.data;
                this.loading = false;
            }
            catch(error){
                this.errorMessage = error
                this.loading = false;
            }
        },
        methods:{
            update: function () {
                try {
                    console.log(this.upddatedContact)
                    const response = contactService.editContact(this.upddatedContact,this.contactId);
                    if (response) {
                    response.then((result) => {
                        const id = result.data.data.id;
                        this.$router.push(`/contacts/view/${id}`);
                    });
                    } else {
                    this.$router.push("/");
                    }
                } catch (error) {
                    console.log(error);
                }
            }
        }
    }
</script>

<style scoped>
</style>