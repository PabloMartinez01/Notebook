package com.pablodev.notebook.mappers

import com.pablodev.notebook.dto.note.NoteDetailResponse
import com.pablodev.notebook.dto.note.NoteRequest
import com.pablodev.notebook.dto.note.NoteResponse
import com.pablodev.notebook.entities.Note
import org.springframework.stereotype.Component
import java.time.LocalDateTime
import java.util.*

@Component
class NoteMapper {

    fun toNoteEntity(noteRequest: NoteRequest): Note = Note(
        id = UUID.randomUUID().toString(),
        title = noteRequest.title,
        content = noteRequest.content,
        icon = noteRequest.icon,
        date = LocalDateTime.now()
    )

    fun toNoteResponse(note: Note): NoteResponse = NoteResponse(
        id = note.id ?: throw IllegalStateException("Cannot convert to NoteResponse: id is null"),
        title = note.title,
        icon = note.icon,
        date = note.date
    )

    fun toNoteDetailResponse(note: Note): NoteDetailResponse = NoteDetailResponse(
        id = note.id ?: throw IllegalStateException("Cannot convert to NoteDetailResponse: id is null"),
        title = note.title,
        content = note.content,
        icon = note.icon,
        date = note.date
    )

}