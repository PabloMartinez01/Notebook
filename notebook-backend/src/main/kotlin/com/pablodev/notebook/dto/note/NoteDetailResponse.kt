package com.pablodev.notebook.dto.note

import java.time.LocalDateTime

data class NoteDetailResponse(
    val id: String,
    val title: String,
    val content: String,
    val icon: String,
    val date: LocalDateTime
)
