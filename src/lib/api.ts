export async function createProject(data: any) {
    await fetch(`/api/projects`, {
        method: 'PUT',
        body: JSON.stringify({
            data
        })
    })
}

export async function editProject(id: string, data: any) {
    await fetch(`/api/projects/${id}`, {
        method: 'POST',
        body: JSON.stringify({
            data
        })
    })
}

export async function deleteProject(id: string) {
    await fetch(`/api/projects/${id}`, {
        method: 'DELETE'
    })
}