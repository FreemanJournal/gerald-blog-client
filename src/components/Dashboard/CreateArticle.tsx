import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { EditorState } from 'react-draft-wysiwyg';
import { v4 as uuidv4 } from 'uuid';
export default function CreateArticle() {
    const [_id, setId] = useState<String>('');
    const [title, setTitle] = useState<String>('');
    const [picture, setPicture] = useState<String>('');
    const [content, setContent] = useState<String>('');
    const [headline, setHeadline] = useState<String>('');
    const [editorState, setEditorState] = useState<EditorState>(EditorState.createEmpty());

    const [saving, setSaving] = useState<Boolean>(false);
    const [loading, setLoading] = useState<Boolean>(true);
    const [success, setSuccess] = useState<String>('');
    const [error, setError] = useState<String>('');

    const user = { displayName: "Md Ishaq", email: "ishaqrabbu97@gmail.com" }

    useEffect(() => {
        let blogID = uuidv4();
        setId(blogID)


    }, [])

    const getBlog = async (id: string) => {
        try {
            const response = await axios('')
            
        } catch (error) {
            
        }
    }

    return (
        <div>CreateArticle</div>
    )
}
