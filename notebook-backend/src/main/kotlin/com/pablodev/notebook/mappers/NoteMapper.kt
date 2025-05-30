package com.pablodev.notebook.mappers

import com.pablodev.notebook.dto.note.NoteDetailResponse
import com.pablodev.notebook.dto.note.NoteRequest
import com.pablodev.notebook.dto.note.NoteResponse
import com.pablodev.notebook.entities.Note
import org.springframework.stereotype.Component
import java.util.*

@Component
class NoteMapper {

    fun toNoteEntity(noteRequest: NoteRequest): Note = Note(
        id = UUID.randomUUID().toString(),
        title = noteRequest.title,
        content = noteRequest.content
    )

    fun toNoteResponse(note: Note): NoteResponse = NoteResponse(
        id = note.id ?: throw IllegalStateException("Cannot convert to NoteResponse: id is null"),
        title = note.title,
    )

    fun toNoteDetailResponse(note: Note): NoteDetailResponse = NoteDetailResponse(
        id = note.id ?: throw IllegalStateException("Cannot convert to NoteDetailResponse: id is null"),
        title = note.title,
        content = note.content
    )

}