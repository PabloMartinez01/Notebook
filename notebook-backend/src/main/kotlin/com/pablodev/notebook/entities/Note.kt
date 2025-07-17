package com.pablodev.notebook.entities

import org.springframework.data.mongodb.core.mapping.Document
import org.springframework.data.mongodb.core.mapping.MongoId
import java.time.LocalDateTime

@Document(collection = "Notebooks")
data class Note(
    @MongoId val id: String? = null,
    val title: String,
    val content: String,
    val icon: String,
    val date: LocalDateTime
)