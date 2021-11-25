// enclose with brackets for attribute selector
const tabList = document.querySelector('[role="tablist"]');
const tabOptions = document.querySelectorAll('[role="tab"]');


const handleClick = (event) => {
    // console.log(event.target);

    const targetTab = event.target;
    const targetContent = targetTab.getAttribute("aria-controls");
    const targetImage = targetTab.getAttribute('data-tab-image')

    // console.log(targetImage);

    //========= select parent containers
    const tabContainer = targetTab.parentNode; 
    const gridContainer = tabContainer.parentNode;
    // console.log(gridContainer);

    try {
        //========== tabOption selected
    
        tabList.querySelector('[aria-selected="true"]').setAttribute('aria-selected', false)
        targetTab.setAttribute('aria-selected', true)
        
        //========== show / hide content

        const hideContent = (container, content) => {
            // container.querySelectorAll(content).forEach( (element) => {
            //     element.setAttribute('hidden', true)
            // })

            container.querySelectorAll(content).forEach( (element) => {
                element.classList.remove('fadeIn')
                element.classList.add('fadeOut')
                
            })
        }

        // console.log(targetContent, targetImage);

        const showContent = (container, content) => {
            // container.querySelector(`#${content}`).removeAttribute('hidden')

            container.querySelector(`#${content}`).classList.remove('fadeOut')
            container.querySelector(`#${content}`).classList.add('fadeIn') 
        }

        hideContent(gridContainer, '[role="tabpanel"]')
        hideContent(gridContainer, 'picture')

        showContent(gridContainer, targetContent)
        showContent(gridContainer, targetImage)
    } catch (error) {
        console.log('hey yall!', error);
    }
}

tabOptions.forEach( (tabOption) => {
    tabOption.addEventListener('click', handleClick);
})


