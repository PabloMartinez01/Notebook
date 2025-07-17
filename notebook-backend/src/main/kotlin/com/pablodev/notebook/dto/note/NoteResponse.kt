package com.pablodev.notebook.dto.note

import java.time.LocalDateTime

data class NoteResponse(
    val id: String,
    val title: String,
    val icon: String,
    val date: LocalDateTime
)
