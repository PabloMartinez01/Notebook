package com.pablodev.notebook.repositories

import com.pablodev.notebook.entities.Note
import org.springframework.data.repository.CrudRepository

interface NoteRepository: CrudRepository<Note, String>