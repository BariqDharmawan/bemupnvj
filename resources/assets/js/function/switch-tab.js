export function deactiveSiblings(currentTab) {
    currentTab.parent().siblings().find('.nav-link')
    .removeClass('active').attr('aria-selected', 'false')

    console.log('remove active siblings')
}