<WidgetList
    showDetails={this.showDetails.bind(this)}
    widgets={this.state.widgets} /> * /}

    < p > <a id='show-widget-link' href='#' onClick={(e) => this.showAddWidget(e)}>Add widget</a></p >

        {
            this.state.addWidgetVisible && <AddWidget
                finishAdd={this.refreshList.bind(this)} />
        }

{
    this.state.detailsVisible && <WidgetDetails
        isVisible={this.state.detailsVisible}
        hideDetails={this.hideDetails.bind(this)}
        widget={this.state.activeWidget} />
}