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
        var noteResponse: NoteResponse = NoteResponse("kmf8dfr4", "title", LocalDateTime.now())

        Mockito.`when`<NoteResponse>(noteService.saveNote(noteRequest)).thenReturn(noteResponse)

        val responseEntity: ResponseEntity<NoteResponse> = noteController.createNote(noteRequest)

        assertThat(responseEntity).isNotNull()
        assertThat(responseEntity.statusCode).isEqualTo(HttpStatus.OK)
    }


}