package com.pablodev.notebook.services

import com.pablodev.notebook.dto.NoteDetailResponse
import com.pablodev.notebook.dto.NoteRequest
import com.pablodev.notebook.dto.NoteResponse

interface NoteService {
    fun saveNote(noteRequest: NoteRequest): NoteResponse
    fun findNoteById(id: String): NoteResponse
    fun findNoteDetailById(id: String): NoteDetailResponse
    fun findAllNotes(): List<NoteResponse>
    fun deleteNoteById(id: String): NoteResponse
}