package com.pablodev.notebook.controllers

import com.pablodev.notebook.dto.NoteRequest
import com.pablodev.notebook.dto.NoteResponse
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


    @GetMapping("/{id}")
    fun getNoteById(@PathVariable id: String): ResponseEntity<NoteResponse> =
        noteService.findNoteById(id)
            .let { ResponseEntity.ok(it) }

}