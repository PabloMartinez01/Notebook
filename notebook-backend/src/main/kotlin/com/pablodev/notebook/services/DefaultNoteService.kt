package com.pablodev.notebook.services

import com.pablodev.notebook.dto.note.NoteDetailResponse
import com.pablodev.notebook.dto.note.NoteRequest
import com.pablodev.notebook.dto.note.NoteResponse
import com.pablodev.notebook.entities.Note
import com.pablodev.notebook.exceptions.NoteNotFoundException
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

    override fun updateNote(id: String, noteRequest: NoteRequest): NoteResponse  {
        val existingNote: Note = noteRepository.findById(id)
            .orElseThrow { NoteNotFoundException("Note with id $id not found") }

        return noteMapper.toNoteEntity(noteRequest)
            .copy(id = existingNote.id)
            .let(noteRepository::save)
            .let(noteMapper::toNoteResponse)
    }

    override fun findNoteById(id: String): NoteResponse =
        noteRepository.findById(id)
            .orElseThrow { NoteNotFoundException("Note with id $id not found") }
            .let(noteMapper::toNoteResponse)

    override fun findNoteDetailById(id: String): NoteDetailResponse =
        noteRepository.findById(id)
            .orElseThrow { NoteNotFoundException("Note with id $id not found") }
            .let(noteMapper::toNoteDetailResponse)

    override fun findAllNotes(): List<NoteResponse> =
        noteRepository.findAll()
            .map(noteMapper::toNoteResponse)

    override fun deleteNoteById(id: String): Unit {
        val note = noteRepository.findById(id)
            .orElseThrow { NoteNotFoundException("Note with id $id not found") }
        noteRepository.delete(note)
    }

}