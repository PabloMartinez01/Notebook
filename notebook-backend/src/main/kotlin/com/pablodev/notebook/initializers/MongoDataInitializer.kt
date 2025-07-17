package com.pablodev.notebook.initializers

import com.pablodev.notebook.entities.Note
import com.pablodev.notebook.repositories.NoteRepository
import org.springframework.boot.CommandLineRunner
import org.springframework.stereotype.Component
import java.time.LocalDateTime
import java.util.*

@Component
class MongoDataInitializer(val noteRepository: NoteRepository): CommandLineRunner {

    override fun run(vararg args: String?) {

        noteRepository.deleteAll();

        val notes: List<Note> = listOf(
            Note(
                id = UUID.randomUUID().toString(),
                title = "Note 1",
                content = "This is the first note",
                icon = "1F600",
                date = LocalDateTime.now()
            ),
            Note(
                id = UUID.randomUUID().toString(),
                title = "Note 2",
                content = "This is the second note",
                icon = "1F4DD",
                date = LocalDateTime.now()
            ),
            Note(
                id = UUID.randomUUID().toString(),
                title = "Note 3",
                content = "This is the third note",
                icon = "1F680",
                date = LocalDateTime.now()
            )
        )

        noteRepository.saveAll(notes)

    }

}