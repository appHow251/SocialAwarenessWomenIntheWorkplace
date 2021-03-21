<template>
  <div>
    <div id="photo-chooser" class="">
      <button class="upload-button" v-on:click="picFile">Add Photo</button>
      <input
        hidden
        type="file"
        id="file"
        ref="file"
        v-on:change="uploadImage"
      />
    </div>
    <div id="photo-display">
      <div id="vertical-align">
        <div>
          <img id="imageView" />
        </div>
        <div id="caption-box" v-show="files != null">
          <label
            >Add Photo Caption
            <textarea
              id="caption"
              name="caption"
              rows="1"
              maxlength="156"
              wrap="hard"
              v-if="files != null"
              v-on:change="handleCaptionChanged"
              v-model="caption"
            ></textarea>
          </label>
          <button id="submit-btn" v-on:click.prevent="submitFile">
            Click to Submit Photo
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "imageUpload",
  data() {
    return {
      previewImage: null,
    };
  },
  methods: {
    picFile() {
      this.$refs.file.click();
    },
    uploadImage(event) {
      this.files = event.target.files;
      const imageView = document.getElementById("imageView");
      imageView.src = URL.createObjectURL(this.files[0]);
    },
  },
};
</script>
<style scoped>

#photo-page {
  color: white;
  height: 2000px;
  background-color: #00adee;
}
#photo-chooser {
  text-align: center;
  margin: 20px auto;
  padding: 20px 0;
  margin: 2rem 1rem 1rem 1rem;
}
#file-label {
  padding-left: 100px;
}
#photo-display {
  text-align: center;
  position: relative;
}
#imageView {
  height: 475px;
  width: auto;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  margin: 0 2rem 2rem 2rem;
}
#caption-box {
  max-width: 550px;
  width: auto;
  margin: 0 auto;
  padding: 5px 0;
}
.upload-button {
  padding: 0 33px;
  border-radius: 9px;
  background-color: #8cc63f;
  color: white;
  text-transform: uppercase;
  height: 50px;
}
#caption-box textarea {
  background-color: white;
  text-align: center;
  font-size: x-large;
  font-weight: bold;
  padding: 20px 0px 20px 0px;
  border-radius: 10px;
}
#caption {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  width: 100%;
  display: block;
  margin: auto;
}
#caption-box label {
  font-size: large;
  font-weight: bold;
}
#submit-btn {
  color: white;
  background-color: #8cc63f;
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
}
#vertical-align {
  padding-top: 1%;
}
</style>

