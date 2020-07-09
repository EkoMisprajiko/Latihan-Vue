<template>
  <div class="w-full flex items-center justify-center">
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md">
        <h2 class="font-semibold text-gray-900 text-2xl leading-tight border-b-2 border-gray-200 pb-4">
            Upload Image
        </h2>
        <div class="mt-4 mb-4">
            <p class="text-center mb-4">
                <input type="file" @change="onFileSelected" multiple>
            </p>
        </div>
        <div class="">
            <p class="text-center">
                <button @click="onUpload" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                    Upload File
                </button>
            </p>
        </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedFile: null,
    };
  },
  methods: {
    onFileSelected(event) {
      this.selectedFile = event.target.files;
      console.log('File Selected');
    },
    onUpload() {
      const fd = new FormData();
      for (const i of Object.keys(this.selectedFile)) {
        fd.append('image', this.selectedFile[i]);
        console.log(this.selectedFile.name);
      }
      // fd.append('image', this.selectedFile, this.selectedFile.name);
      //   axios.post('api', fd)
      //   .then(res = {
      //       console.log(res)
      //   })
      // console.log(this.selectedFile.name);
    },
  },
};
</script>
