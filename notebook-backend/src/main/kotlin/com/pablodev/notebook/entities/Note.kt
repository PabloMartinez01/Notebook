package com.pablodev.notebook.entities

import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document

@Document(collection = "Notebooks")
data class Note(
    @Id val id: String? = null,
    val title: String,
    val content: String,
)