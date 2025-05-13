package com.pablodev.notebook.controllers

import com.pablodev.notebook.dto.NoteDetailResponse
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

    @GetMapping
    fun getAllNotes(): ResponseEntity<List<NoteResponse>> =
        noteService.findAllNotes()
            .let { ResponseEntity.ok(it) }


    @GetMapping("/{id}")
    fun getNoteDetailsById(@PathVariable id: String): ResponseEntity<NoteDetailResponse> =
        noteService.findNoteDetailById(id)
            .let { ResponseEntity.ok(it) }




}