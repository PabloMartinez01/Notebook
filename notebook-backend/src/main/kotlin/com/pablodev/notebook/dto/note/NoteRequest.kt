package com.pablodev.notebook.dto.note

data class NoteRequest(
    val title: String,
    val content: String,
    val icon: String
)
