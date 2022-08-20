<template>
<v-form>
    <v-row>
        <v-col cols="4">
            <v-text-field
            label="Nombre"
            outlined
            ></v-text-field>
        </v-col>
        <v-col cols="4">
            <v-text-field
            label="Apellido"
            outlined
            ></v-text-field>
        </v-col>
        <v-col cols="4">
            <v-text-field
            label="Telefono"
            outlined
            ></v-text-field>
        </v-col>
        <v-col cols="4">
            <v-text-field
            label="Email"
            outlined
            ></v-text-field>
        </v-col>
        <v-col cols="4">
            <v-select
            label="Asunto"
            outlined
            ></v-select>
        </v-col>
        <v-col cols="12">
            <v-textarea
            label="Asunto"
            outlined
            ></v-textarea>
        </v-col>
        <v-btn>Enviar Mensaje</v-btn>
    </v-row>
</v-form>
   
</template>