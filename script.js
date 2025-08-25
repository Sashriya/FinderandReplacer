        document.getElementById("replaceBtn").addEventListener("click", function() {
            const searchText = document.getElementById("search").value;
            const replaceText = document.getElementById("replace").value;
            const content = document.getElementById("textInput").value;
            const newContent = content.replace(new RegExp(searchText, 'g'), replaceText);
            document.getElementById("textInput").value = newContent;
            document.getElementById("search").value = "";
            document.getElementById("replace").value = "";
            document.getElementById("textInput").focus();
        });
