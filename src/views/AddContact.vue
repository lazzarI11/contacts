<template>
    <div class="container mt-3">
        <div class="row">
            <div class="col">
                <p class="h3 text-success fw-bold">Add Contact</p>
                <p class="fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quibusdam eum ullam provident assumenda distinctio facere mollitia expedita, officiis esse corrupti ad magni doloremque! Consequuntur, tempore hic. Explicabo, fugit commodi.</p>
            </div>
        </div>
    </div>
    <div class="container mt-3">
        <div class="row">
            <div class="col-md-4">
                <form @submit.prevent="create()">
                    <div class="mb-2">
                        <input v-model="contact.name" type="text" class="form-control" placeholder="Name">
                    </div>
                    <div class="mb-2">
                        <input v-model="contact.photo" type="text" class="form-control" placeholder="PhotoURL">
                    </div>
                    <div class="mb-2">
                        <input v-model="contact.email" type="email" class="form-control" placeholder="Email">
                    </div>
                    <div class="mb-2">
                        <input v-model="contact.mobile" type="number" class="form-control" placeholder="Mobile">
                    </div>
                    <div class="mb-2">
                        <input v-model="contact.company" type="text" class="form-control" placeholder="CompanyName">
                    </div>
                    <div class="mb-2">
                        <input v-model="contact.title" type="text" class="form-control" placeholder="Title">
                    </div>
                    <div class="mb-2">
                        <select v-model="contact.groupId" class="form-control">
                            <option value="">Select Group</option>
                            <option :value="group.id" v-for="group of groups" :key="group">{{ group.name }}</option>
                        </select>
                    </div>
                    <div class="mb-2">
                        <input type="submit" class="btn btn-success" value="Create">
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
// import SpinnerLoader from "../components/SpinnerLoader"
import {contactService} from "@/services/contactService"
    export default{
        components: {
            // SpinnerLoader
        },
        name: "AddContact",
        data : function (){
            return{
                contact:{
                    name:'',
                    photo:'',
                    email:'',
                    mobile:'',
                    company:'',
                    title:'',
                    groupId: null
                },
                groups:[],
                errorMessage:null,
                loading:false
            }
        },
        created: async function (){
            try{
                this.loading = true;
                let response = await contactService.getAllGroups();
                this.groups = response.data.data
                this.loading = false;
            }
            catch(error){
                this.errorMessage = error
                this.loading = false;
            }
        },
        methods:{
            create: function () {
                try {
                    const response = contactService.createContact(this.contact);
                    if (response) {
                    response.then((result) => {
                        const id = result.data.data.id;
                        this.$router.push(`/contacts/view/${id}`);
                    });
                    } else {
                    this.$router.push("/contacts/add");
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