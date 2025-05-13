package com.pablodev.notebook.services

import com.pablodev.notebook.dto.NoteDetailResponse
import com.pablodev.notebook.dto.NoteRequest
import com.pablodev.notebook.dto.NoteResponse
import com.pablodev.notebook.mappers.NoteMapper
import com.pablodev.notebook.repositories.NoteRepository
import org.springframework.stereotype.Service

@Service
class DefaultNoteService (
    private val noteRepository: NoteRepository,
    private val noteMapper: NoteMapper) : NoteService {

    override fun saveNote(noteRequest: NoteRequest): NoteResponse =
         noteMapper.toNoteEntity(noteRequest)
            .let(noteRepository::save)
            .let(noteMapper::toNoteResponse)

    override fun findNoteById(id: String): NoteResponse =
        noteRepository.findById(id)
            .orElseThrow { RuntimeException("Note not found") }
            .let(noteMapper::toNoteResponse)

    override fun findNoteDetailById(id: String): NoteDetailResponse {
        TODO("Not yet implemented")
    }

    override fun findAllNotes(): List<NoteResponse> {
        TODO("Not yet implemented")
    }

    override fun deleteNoteById(id: String): NoteResponse {
        TODO("Not yet implemented")
    }

}