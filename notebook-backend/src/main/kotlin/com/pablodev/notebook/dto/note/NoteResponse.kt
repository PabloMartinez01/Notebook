package com.pablodev.notebook.dto.note

import java.time.LocalDateTime

data class NoteResponse(
    val id: String,
    val title: String,
    val date: LocalDateTime
)
