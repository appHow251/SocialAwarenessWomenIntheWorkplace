// @change is the event listner that triggers
// whenever the user selects a new file
// and execute on the file selected
// then add it in script in view instance in
// the component with a methods object

<template>
<div class="hello">
    <input type="file" @change="onFileSelector">
    </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    data() {
        return {
            msg: "Welcome welcome"
            }
            },
            methods: {
                // get the click event file sected
                onFileSelected(event) {
                    const file = event.target.files[0]
                },
                data() {
                    return {
                        selectedFile: null
                    }
                },
                onUpload() {
                    const formData = new FormData()
                    formData.append('myFile', this.selectedFile, this.selectedFile.name)
                    axios.post('my-domain.com/file-upload',formData)

                },
                uploadHandler = () => {
                    axios.post('my-domain.com/file-upload', formData, {
                        onUploadProgress: progressEvent => {
                            console.log(progressEvent.loaded / progressEvent.total)
                        }
                    })
                }
            }

            }
            
            
            
            </script>