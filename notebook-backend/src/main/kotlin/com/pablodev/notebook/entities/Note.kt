package com.pablodev.notebook.entities

import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document
import org.springframework.data.mongodb.core.mapping.MongoId

@Document(collection = "Notebooks")
data class Note(
    val title: String,
    val content: String,
    @MongoId val id: String? = null,
)