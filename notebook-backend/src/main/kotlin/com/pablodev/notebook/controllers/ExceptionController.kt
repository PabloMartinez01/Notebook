package com.pablodev.notebook.controllers

import com.pablodev.notebook.dto.error.ErrorResponse
import org.springframework.context.annotation.Bean
import org.springframework.dao.DataAccessException
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.ExceptionHandler
import org.springframework.web.bind.annotation.RestControllerAdvice

@RestControllerAdvice
class ExceptionController {


    @ExceptionHandler(DataAccessException::class)
    fun handleDataAccessException(ex: DataAccessException): ResponseEntity<ErrorResponse> =
        ResponseEntity.internalServerError().body(
            ErrorResponse(
                status = HttpStatus.INTERNAL_SERVER_ERROR,
                message = "Error accessing data",
            )
        )


}