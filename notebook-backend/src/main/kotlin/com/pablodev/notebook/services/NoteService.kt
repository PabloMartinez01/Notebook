package com.pablodev.notebook.services

import com.pablodev.notebook.dto.note.NoteDetailResponse
import com.pablodev.notebook.dto.note.NoteRequest
import com.pablodev.notebook.dto.note.NoteResponse

interface NoteService {
    fun saveNote(noteRequest: NoteRequest): NoteResponse
    fun findNoteById(id: String): NoteResponse
    fun findNoteDetailById(id: String): NoteDetailResponse
    fun findAllNotes(): List<NoteResponse>
    fun deleteNoteById(id: String): Unit
}