package com.pablodev.notebook.initializers

import com.pablodev.notebook.entities.Note
import com.pablodev.notebook.repositories.NoteRepository
import lombok.RequiredArgsConstructor
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.CommandLineRunner
import org.springframework.stereotype.Component
import java.util.UUID

@Component
class MongoDataInitializer(val noteRepository: NoteRepository): CommandLineRunner {

    override fun run(vararg args: String?) {

        noteRepository.deleteAll();

        val notes: List<Note> = listOf(
            Note("Note 1", "This is the first note", UUID.randomUUID().toString()),
            Note("Note 2", "This is the second note", UUID.randomUUID().toString()),
            Note("Note 3", "This is the third note", UUID.randomUUID().toString())
        )

        noteRepository.saveAll(notes)

    }

}