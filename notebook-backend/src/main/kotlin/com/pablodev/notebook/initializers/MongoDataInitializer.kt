package com.pablodev.notebook.initializers

import com.pablodev.notebook.entities.Note
import com.pablodev.notebook.repositories.NoteRepository
import lombok.RequiredArgsConstructor
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.CommandLineRunner
import org.springframework.stereotype.Component
import java.time.LocalDateTime
import java.util.UUID

@Component
class MongoDataInitializer(val noteRepository: NoteRepository): CommandLineRunner {

    override fun run(vararg args: String?) {

        noteRepository.deleteAll();

        val notes: List<Note> = listOf(
            Note(
                id = UUID.randomUUID().toString(),
                title = "Note 1",
                content = "This is the first note",
                date = LocalDateTime.now()
            ),
            Note(
                id = UUID.randomUUID().toString(),
                title = "Note 2",
                content = "This is the second note",
                date = LocalDateTime.now()
            ),
            Note(
                id = UUID.randomUUID().toString(),
                title = "Note 3",
                content = "This is the third note",
                date = LocalDateTime.now()
            )
        )

        noteRepository.saveAll(notes)

    }

}