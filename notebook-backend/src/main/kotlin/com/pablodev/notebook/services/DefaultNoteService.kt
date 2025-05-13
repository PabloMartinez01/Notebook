package com.pablodev.notebook.services

import com.pablodev.notebook.dto.note.NoteDetailResponse
import com.pablodev.notebook.dto.note.NoteRequest
import com.pablodev.notebook.dto.note.NoteResponse
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

    override fun findNoteDetailById(id: String): NoteDetailResponse =
        noteRepository.findById(id)
            .orElseThrow { RuntimeException("Note not found") }
            .let(noteMapper::toNoteDetailResponse)

    override fun findAllNotes(): List<NoteResponse> =
        noteRepository.findAll()
            .map(noteMapper::toNoteResponse)

    override fun deleteNoteById(id: String): Unit =
        noteRepository.deleteById(id)

}