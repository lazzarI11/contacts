<template>
    <div class="container mt-3">
        <div class="row">
            <div class="col">
                <p class="h3 text-success fw-bold">View Contact</p>
                <p class="fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quibusdam eum ullam provident assumenda distinctio facere mollitia expedita, officiis esse corrupti ad magni doloremque! Consequuntur, tempore hic. Explicabo, fugit commodi.</p>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row align-items-center">
            <div class="col-md-4"> 
                <img :src="contact.photo" alt="" class="contact-img">
            </div>
            <div class="col-md-6">
                <ul class="list-group">
                    <li class="list-group-item">Name: <span class="fw-bold"> {{ contact.name }}</span></li>
                    <li class="list-group-item">Email: <span class="fw-bold"> {{ contact.email }}</span></li>
                    <li class="list-group-item">Mobile: <span class="fw-bold"> {{ contact.mobile }}</span></li>
                    <li class="list-group-item">Company: <span class="fw-bold"> {{ contact.company }}</span></li>
                    <li class="list-group-item">Title: <span class="fw-bold"> {{ contact.title }}</span></li>
                    <li class="list-group-item">Group: <span class="fw-bold"> {{ contact.groupName }}</span></li>
                </ul>
            </div>
        </div>
        <div class="row mt-3">
            <div class="column">
                <router-link to="/" class="btn btn-success"><i class="fa fa-arrow-alt-circle-left"></i>Return</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import {contactService} from "@/services/contactService"
    export default{
        name: "ViewContact",
        data : function (){
            return{
                contact:{},
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
                this.contact = response.data.data;
                this.loading = false;
            }
            catch(error){
                this.errorMessage = error
                this.loading = false;
            }
        },
    }
    
</script>

<style scoped>
</style>