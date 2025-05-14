package com.pablodev.notebook.controllers

import com.pablodev.notebook.dto.note.NoteDetailResponse
import com.pablodev.notebook.dto.note.NoteRequest
import com.pablodev.notebook.dto.note.NoteResponse
import com.pablodev.notebook.services.DefaultNoteService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/notes")
class NoteController (private val noteService: DefaultNoteService) {

    @PostMapping
    fun createNote(@RequestBody noteRequest: NoteRequest): ResponseEntity<NoteResponse> =
        noteService.saveNote(noteRequest)
            .let { ResponseEntity.ok(it) }

    @GetMapping
    fun getAllNotes(): ResponseEntity<List<NoteResponse>> =
        noteService.findAllNotes()
            .let { ResponseEntity.ok(it) }

    @GetMapping("/{id}")
    fun getNoteDetailsById(@PathVariable id: String): ResponseEntity<NoteDetailResponse> =
        noteService.findNoteDetailById(id)
            .let { ResponseEntity.ok(it) }

    @PutMapping("/{id}")
    fun updateNote(@RequestBody noteRequest: NoteRequest): ResponseEntity<NoteResponse> =
        noteService.saveNote(noteRequest)
            .let { ResponseEntity.ok(it) }

    @DeleteMapping("/{id}")
    fun deleteNoteById(@PathVariable id: String): ResponseEntity<Any> =
        noteService.deleteNoteById(id)
            .let { ResponseEntity.noContent().build() }
}