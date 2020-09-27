<template>
  <div class="product_category">
    <h3 subheading class="ml-3 grey--text">Add Category</h3>
    <v-container class="ma-3 py-1 grey lighten-5">
      <v-row>
        <v-col cols="12">
          <form @submit.prevent="submit">
            <v-row>
              <v-col md="6" xs="12" lg="3">
                <v-text-field
                  v-model="categoryForm.name"
                  label="Category Name"
                  :error-messages="nameErrors"
                   required
                  @input="$v.categoryForm.name.$touch()"
                  @blur="$v.categoryForm.name.$touch()"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row justify="start">
              <v-col md="4">
                <v-btn
                  depressed
                  small
                  color="primary"
                  class="mr-2"
                  @click="submit"
                  >Add</v-btn
                >
                <v-btn depressed small color="secondary" @click="reset"
                  >Reset</v-btn
                >
              </v-col>
            </v-row>
          </form>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";
export default {
  name: "ProductCategoryManage",

  mixins: [validationMixin],

  validations: {
    categoryForm:{
          name: { required },
    }
  },

  computed: {
      nameErrors () {
        const errors = []
        if (!this.$v.categoryForm.name.$dirty) return errors
        !this.$v.categoryForm.name.required && errors.push('Name is required.')
        return errors
      },
  },

  data: () => ({
    categoryForm: {
      name: "",
    },
  }),

  methods: {
    reset(){

    },
    submit(){
      this.$v.categoryForm.$touch();
      if (this.$v.categoryForm.$invalid){
        console.log('invalid');
        return false;
      }

    }
  },
};
</script>
