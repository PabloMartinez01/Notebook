package com.pablodev.notebook.controllers

import com.pablodev.notebook.dto.note.NoteDetailResponse
import com.pablodev.notebook.dto.note.NoteRequest
import com.pablodev.notebook.dto.note.NoteResponse
import com.pablodev.notebook.services.DefaultNoteService
import com.pablodev.notebook.services.NoteService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/notes")
class NoteController (private val noteService: NoteService) {

    @PostMapping
    fun createNote(@RequestBody noteRequest: NoteRequest): ResponseEntity<NoteResponse> =
        ResponseEntity.ok(noteService.saveNote(noteRequest))

    @GetMapping
    fun getAllNotes(): ResponseEntity<List<NoteResponse>> =
        ResponseEntity.ok(noteService.findAllNotes())

    @GetMapping("/{id}")
    fun getNoteDetailsById(@PathVariable id: String): ResponseEntity<NoteDetailResponse> =
        ResponseEntity.ok(noteService.findNoteDetailById(id))

    @DeleteMapping("/{id}")
    fun deleteNoteById(@PathVariable id: String): ResponseEntity<Any> {
        noteService.deleteNoteById(id)
        return ResponseEntity.noContent().build()
    }

}