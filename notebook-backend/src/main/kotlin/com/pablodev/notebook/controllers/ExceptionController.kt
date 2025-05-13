package com.pablodev.notebook.controllers

import com.pablodev.notebook.dto.error.ErrorResponse
import com.pablodev.notebook.exceptions.NoteNotFoundException
import org.springframework.dao.DataAccessException
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.http.converter.HttpMessageNotReadableException
import org.springframework.web.HttpRequestMethodNotSupportedException
import org.springframework.web.bind.annotation.ExceptionHandler
import org.springframework.web.bind.annotation.RestControllerAdvice
import org.springframework.web.servlet.resource.NoResourceFoundException

private const val METHOD_NOT_ALLOWED = "Method not allowed"
private const val NOTE_NOT_FOUND = "Note not found"
private const val RESOURCE_NOT_FOUND = "Resource not found"
private const val MESSAGE_NOT_READABLE = "Error parsing the json body"
private const val DATA_ACCESS_ERROR = "Error accessing data"
private const val INTERNAL_SERVER_ERROR = "Internal server error"

@RestControllerAdvice
class ExceptionController {

    @ExceptionHandler(NoteNotFoundException::class)
    fun handleNoteNotFoundException(e: NoteNotFoundException): ResponseEntity<ErrorResponse> =
        ResponseEntity.badRequest().body(
            ErrorResponse(
                status = HttpStatus.BAD_REQUEST,
                message = e.message ?: NOTE_NOT_FOUND
            )
        )

    @ExceptionHandler(NoResourceFoundException::class)
    fun handleNoResourceFoundException(e: NoResourceFoundException): ResponseEntity<ErrorResponse> =
        ResponseEntity.status(HttpStatus.NOT_FOUND).body(
            ErrorResponse(
                status = HttpStatus.NOT_FOUND,
                message = RESOURCE_NOT_FOUND
            )
        )

    @ExceptionHandler(HttpRequestMethodNotSupportedException::class)
    fun handleHttpRequestMethodNotSupportedException(e: HttpRequestMethodNotSupportedException): ResponseEntity<ErrorResponse> =
        ResponseEntity.status(HttpStatus.METHOD_NOT_ALLOWED).body(
            ErrorResponse(
                status = HttpStatus.METHOD_NOT_ALLOWED,
                message = METHOD_NOT_ALLOWED
            )
        )

    @ExceptionHandler(HttpMessageNotReadableException::class)
    fun handleHttpMessageNotReadableException(e: HttpMessageNotReadableException): ResponseEntity<ErrorResponse> =
        ResponseEntity.badRequest().body(
            ErrorResponse(
                status = HttpStatus.BAD_REQUEST,
                message = MESSAGE_NOT_READABLE
            )
        )

    @ExceptionHandler(DataAccessException::class)
    fun handleDataAccessException(ex: DataAccessException): ResponseEntity<ErrorResponse> =
        ResponseEntity.internalServerError().body(
            ErrorResponse(
                status = HttpStatus.INTERNAL_SERVER_ERROR,
                message = DATA_ACCESS_ERROR,
            )
        )

    @ExceptionHandler(Exception::class)
    fun handleException(ex: Exception): ResponseEntity<ErrorResponse> =
        ResponseEntity.internalServerError().body(
            ErrorResponse(
                status = HttpStatus.INTERNAL_SERVER_ERROR,
                message = INTERNAL_SERVER_ERROR
            )
        )



}