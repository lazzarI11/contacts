<template>
    <div class="container mt-3">
        <div class="row">
            <div class="col">
                <p class="h3 text-success fw bold">Contact Manager
                <router-link to="/contacts/add" class="btn btn-success btn-sm">
                    <i class="fa fa-plus-circle"></i> New</router-link>
                </p>
                <p class="fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, eveniet porro quod odit rerum exercitationem mollitia accusamus delectus labore vero temporibus pariatur quis fugit molestiae explicabo veniam cum amet fugiat.</p>
                <form>
                    <div class="row">
                       <div class="col-md-6">
                            <div class="row">
                                <div class="col-6">
                                    <input v-model.trim="name" type="text" class="form-control" placeholder="Search">
                                </div>
                            </div>
                       </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <!--Spinner-->
    <div v-if="loading">
        <div class="container">
            <div class="row">
                <div class="col">
                    <SpinnerLoader/>
                </div>
            </div>
        </div>
    </div>
    <!--Error-->
    <div v-if="!loading && errorMessage">
        <div class="container mt-3">
            <div class="row">
                <div class="col">
                    <p class="h3 text-danger fw-bold">{{ errorMessage }}</p>
                </div>
            </div>
        </div>
    </div>
    <div class="container mt-3" v-if="contacts.length > 0">
        <div class="row">
            <div class="col-md-6" v-for="contact of contacts" :key=  "contact">
                <div class="card my-2 list-group-item-success shadow-lg">
                    <div class="card-body">
                        <div class="row align-items-center">
                            <div class="col-sm-4">
                                <img :src="contact.contact_photo" alt="" class="contact-img">
                            </div>
                            <div class="col-sm-7">
                                <ul class="list-group">
                                    <li class="list-group-item">Name : <span class="fw-bold"> {{contact.contact_name }}</span></li>
                                    <li class="list-group-item">Email : <span class="fw-bold"> {{contact.contact_email }}</span></li>
                                    <li class="list-group-item">Mobile : <span class="fw-bold"> {{contact.contact_mobile}}</span></li>
                                </ul>
                            </div>
                            <div class="col-sm-1 d-flex flex-column justify-content-center align-items-center">
                                <router-link :to="'/contacts/view/' + contact.contact_id" class="btn btn-warning my-1">
                                    <i class="fa fa-eye"></i>
                                </router-link>
                                <router-link :to="'/contacts/edit/' + contact.contact_id" class="btn btn-primary my-1">
                                    <i class="fa fa-pen"></i>
                                </router-link>
                                <button class="btn btn-danger my-1"  @click="deleteContact(contact.contact_id)">
                                    <i class="fa fa-trash"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SpinnerLoader from "../components/SpinnerLoader"
import {contactService} from "@/services/contactService"
    export default{
        components: {
            SpinnerLoader
        },
        name: "ContactManager",
        data: function(){
            return{
                loading: false,
                contacts: [],
                name:null,
                errorMessage : null
            }
        },
        created : async function(){
            try{
                this.loading = true;
                this.fetchContacts(this.name)
                this.loading = false;
            }
            catch(error){
                this.errorMessage = error;
                this.loading = false;
            }
        },
        methods: {
            fetchContacts: async function(name){
                let response = await contactService.getAllContacts(name);
                this.contacts = response.data.data;
                
            },
            deleteContact: function(id) {
                this.loading = true;
                console.log(id)
                contactService.deleteContact(id)
                this.contacts = this.contacts.filter(obj => obj.contact_id !== id);
                this.loading = false;
            },
            search: function() {
              console.log("Dasda")
            },
        },
        watch: {
        name: {
      handler() {
        console.log(this.name)
        if(this.name == ""){
            this.name = null
        }
        this.fetchContacts(this.name)
      },
    },
  },
    }
</script>

<style scoped>
    
</style>