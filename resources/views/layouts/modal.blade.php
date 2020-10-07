<!--Modal-->
<div class="modal opacity-0 pointer-events-none fixed w-full h-full top-0 left-0 flex items-center justify-center z-10">
    <div class="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>

    <div class="modal-container w-8/12 md:11/12 mx-auto rounded shadow-lg z-50 overflow-y-auto">

        <!-- Add margin if you want to see some of the overlay behind the modal-->
        <div class="modal-content py-4 text-left px-6">
            <!--close btn-->
            <div class="flex justify-end items-center pb-3">
                <div class="modal-close cursor-pointer z-50">
                    <svg class="fill-current text-gray-100" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                        <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                    </svg>
                </div>
            </div>

            <!--Body-->
            <div class="responsive-container overflow-hidden relative" style="padding-top: 56.2%;">
                <iframe width="100%" height="450" id="video"
                        class="responsive-iframe absolute top-0 left-0 w-full h-full"
                        src="https://www.youtube.com/embed/{{$src}}"
                        frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>
                </iframe>
            </div>

            <!--Footer-->
            <div class="flex justify-center pt-2">
                <button class="modal-close mt-3 px-2 bg-blue-500 hover:bg-blue-700 p-3 rounded-lg text-white">Close</button>
            </div>

        </div>
    </div>
</div>
