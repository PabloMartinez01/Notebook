package com.pablodev.notebook.controller

import com.pablodev.notebook.controllers.NoteController
import com.pablodev.notebook.dto.note.NoteRequest
import com.pablodev.notebook.dto.note.NoteResponse
import com.pablodev.notebook.services.NoteService
import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.extension.ExtendWith
import org.mockito.Mock
import org.mockito.Mockito
import org.mockito.junit.jupiter.MockitoExtension
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import java.time.LocalDateTime
import java.util.UUID

@ExtendWith(MockitoExtension::class)
class NoteControllerUnitTest {

    @Mock
    private lateinit var noteService: NoteService

    private lateinit var noteController: NoteController

    @BeforeEach
    fun setUp() {
        noteController = NoteController(noteService)
    }

    @Test
    fun givenValidNoteRequest_whenSaveNote_thenReturnOkResponse() {
        var noteRequest: NoteRequest = NoteRequest("title", "content")
        var noteResponse: NoteResponse = NoteResponse(UUID.randomUUID().toString(), "title", LocalDateTime.now())

        Mockito.`when`<NoteResponse>(noteService.saveNote(noteRequest)).thenReturn(noteResponse)

        val responseEntity: ResponseEntity<NoteResponse> = noteController.createNote(noteRequest)

        assertThat(responseEntity).isNotNull()
        assertThat(responseEntity.statusCode).isEqualTo(HttpStatus.OK)
    }


    /*
        @GetMapping
    fun getAllNotes(): ResponseEntity<List<NoteResponse>> =
        ResponseEntity.ok(noteService.findAllNotes())
     */
    @Test
    fun givenNothing_whenGetAllNotes_thenReturnNoteResponseList(): Unit {

        val noteResponses: List<NoteResponse> = listOf<NoteResponse>(
            NoteResponse(UUID.randomUUID().toString(), "title1", LocalDateTime.now()),
            NoteResponse(UUID.randomUUID().toString(), "title2", LocalDateTime.now()),
            NoteResponse(UUID.randomUUID().toString(), "title3", LocalDateTime.now())
        )

        Mockito.`when`<List<NoteResponse>>(noteService.findAllNotes()).thenReturn(noteResponses)

        val responseEntity: ResponseEntity<List<NoteResponse>> = noteController.getAllNotes()

        assertThat(responseEntity).isNotNull()
        assertThat(responseEntity.statusCode).isEqualTo(HttpStatus.OK)
        assertThat(responseEntity.body).isEqualTo(noteResponses)
    }


}