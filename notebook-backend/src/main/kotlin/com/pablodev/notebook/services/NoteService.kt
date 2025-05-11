package com.pablodev.notebook.services

import com.pablodev.notebook.dto.NoteRequest
import com.pablodev.notebook.entities.Note
import com.pablodev.notebook.mappers.NoteMapper
import com.pablodev.notebook.repositories.NoteRepository
import org.springframework.stereotype.Service
import java.util.UUID

@Service
class NoteService(
    private val noteRepository: NoteRepository,
    private val noteMapper: NoteMapper
) {

    fun saveNote(noteRequest: NoteRequest): Unit {
        noteRepository.save(
            noteMapper.toNoteEntity(noteRequest)
        )
    }

    fun findNoteById(id: String): Note = noteRepository.findById(id).orElseThrow {
        RuntimeException("Note with id: $id not found")
    }

}