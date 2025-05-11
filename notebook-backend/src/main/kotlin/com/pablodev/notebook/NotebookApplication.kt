package com.pablodev.notebook

import com.pablodev.notebook.entities.Note
import com.pablodev.notebook.repositories.NoteRepository
import org.springframework.boot.CommandLineRunner
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.context.annotation.Bean

@SpringBootApplication
class NotebookApplication

fun main(args: Array<String>) {
    runApplication<NotebookApplication>(*args)
}


