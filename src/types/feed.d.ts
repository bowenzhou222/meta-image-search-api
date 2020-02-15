declare namespace feed {
  interface IFetchFeedsQuery {
    id?: string
    ids?: string
    tags?: string
    tagmode?: 'all' | 'any'
    nojsoncallback: '1' | '0'
  }
}

export = feed
