package com.pablodev.notebook.services

import com.pablodev.notebook.dto.NoteRequest
import com.pablodev.notebook.dto.NoteResponse
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

    fun saveNote(noteRequest: NoteRequest): NoteResponse =
         noteMapper.toNoteEntity(noteRequest)
            .let(noteRepository::save)
            .let(noteMapper::toNoteResponse)

    fun findNoteById(id: String): NoteResponse =
        noteRepository.findById(id)
            .orElseThrow { RuntimeException("Note not found") }
            .let(noteMapper::toNoteResponse)

}